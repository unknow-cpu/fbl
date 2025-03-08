import classNames from 'classnames/bind';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import style from './Register.module.scss';
const cx = classNames.bind(style);

function RegisterForm() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        day: 1,
        month: 2,
        year: 2025,
        gender: '',
        username: '',
        password: ''
    });

    const months = [
        "tháng 1", "tháng 2", "tháng 3", "tháng 4", 
        "tháng 5", "tháng 6", "tháng 7", "tháng 8", 
        "tháng 9", "tháng 10", "tháng 11", "tháng 12", 
    ];
    const days = [...Array(31)];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1910 + 1 }, (v, i) => currentYear - i);

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};
    
        if (!form.username) {
          newErrors.username = 'username is invalid';
        }
    
        if (form.password.length < 6) {
          newErrors.password = 'Password must be at least 6 characters';
        }
    
        if (!form.firstName) {
            newErrors.firstName = 'First name is required';
        }
      
          // Validate lastName (e.g., should not be empty)
        if (!form.lastName) {
            newErrors.lastName = 'Last name is required';
        }
        if (form.gender === '') {
            newErrors.gender = 'gender is required';
        }
        setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
};

    const Register = async (e) => {
        e.preventDefault();
        const validation = validateForm();
        if (validateForm()) {
            try {
                const response = await axios.post('http://localhost:5000/api/register', form, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
    
                console.log('Đăng ký thành công:', response.data);
                if (response.data.success) {
                    // Xử lý redirect ở client
                    window.location.href = response.data.redirect;
                }
    
            } catch (error) {
                if (error.response) {
                    console.error('Status:', error.response.status);
                    console.error('Data:', error.response.data);
                    
                    if (error.response.data.message === 'Tài khoản đã tồn tại') {
                        alert('Tài khoản đã tồn tại!');
                    } else {
                        alert(error.response.data.message || 'Đăng ký thất bại');
                    }
                } else {
                    console.error('Lỗi:', error.message);
                    alert('Không thể kết nối đến server');
                }
            }
        } else {
            console.log('Form contains errors:', validation.errors);
            const errorMessages = Object.values(validation.errors || {});
            if (errorMessages.length > 0) {
                alert(errorMessages[0]); // Hiển thị lỗi đầu tiên
            } else {
                alert('Có lỗi không xác định trong form');
            }
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
    
        let newErrors = { ...errors };
    
        if (value.trim() === '') {
          newErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} không được trống`;
        } else {
          delete newErrors[name];  // Remove error if field is not empty
        }
    
        setErrors(newErrors);
    };

    
    


    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className={cx('body1')}>
            <div className={cx('container')}>
            <h2 className={cx('form-title')}>Tạo tài khoản mới</h2>
            <p className={cx('subtitle')}>Nhanh chóng và dễ dàng.</p>

            <form>
                <div className={cx('input-group')}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Họ"
                        className={cx('input')}
                        value={form.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Tên"
                        className={cx('input')}
                        value={form.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>
                {errors.firstName && <p className={cx('error')}>{errors.firstName}</p>}
                {errors.lastName && <p className={cx('error')}>{errors.lastName}</p>}

                <div className={cx('input-group')}>
                    <select
                        name="day"
                        className={cx('select')}
                        value={form.day}
                        onChange={handleChange}
                    >
                        {days.map((_, i) => (
                            <option key={i} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <select
                        name="month"
                        className={cx('select')}
                        value={form.month}
                        onChange={handleChange}
                    >
                        {months.map((month, i) => (
                            <option key={i} value={i+1}>
                                {month}
                            </option>
                        ))}
                    </select>
                    <select
                        name="year"
                        className={cx('select')}
                        value={form.year}
                        onChange={handleChange}
                    >
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={cx('radio-group')}>
                    <label className={cx('radio')}>
                        <input
                            type="radio"
                            name="gender"
                            value="Nữ"
                            checked={form.gender === 'Nữ'}
                            onChange={handleChange}
                        />
                        Nữ
                    </label>
                    <label className={cx('radio')}>
                        <input
                            type="radio"
                            name="gender"
                            value="Nam"
                            checked={form.gender === 'Nam'}
                            onChange={handleChange}
                        />
                        Nam
                    </label>
                    <label className={cx('radio')}>
                        <input
                            type="radio"
                            name="gender"
                            value="Tùy chỉnh"
                            checked={form.gender === 'Tùy chỉnh'}
                            onChange={handleChange}
                        />
                        Tùy chỉnh
                    </label>
                </div>
                
                {errors.gender && <p className={cx('error')}>{errors.gender}</p>}

                <input
                    type="text"
                    name="username"
                    placeholder="tài khoản"
                    className={cx('input')}
                    value={form.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {errors.username && <p className={cx('error')}>{errors.username}</p>}
                <input
                    type="password"
                    name="password"
                    placeholder="Mật khẩu mới"
                    className={cx('input')}
                    value={form.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                
                {errors.password && <p className={cx('error')}>{errors.password}</p>}

                <button type="submit" onClick={Register} className={cx('button')}>
                    Đăng ký
                </button>
            </form>

            <p className={cx('footer-text')}>
                Bạn đã có tài khoản? <a href="/" className={cx('link')}>Đăng nhập</a>
            </p>
        </div>
        </div>
    );
}

export default RegisterForm;