import classNames from 'classnames/bind';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import style from './Auth.module.scss';
const cx = classNames.bind(style);

const App = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

    
    const validateForm = () => {
        let newErrors = {};
        if (!formData.username.trim()) {
          newErrors.username = 'Vui lòng nhập tên đăng nhập';
        }
        if (!formData.password.trim()) {
          newErrors.password = 'Vui lòng nhập mật khẩu';
        }
        setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validation = validateForm();
        if (Object.keys(errors).length > 0 || isSubmitting) return;
    
        setIsSubmitting(true);
        if (validateForm()) {
        try {
            const response = await axios.post('http://localhost:5000/api/login', formData);
            
            // Xử lý redirect dựa trên response từ server
            if (response.data.success) {
              navigate(response.data.redirect, { replace: true });
            }else {
                // Xử lý khi đăng nhập không thành công
                throw new Error(response.data.message || 'Đăng nhập thất bại');
            }
          } catch (err) {
            let errorMessage = 'Đăng nhập thất bại. Vui lòng thử lại sau';
            
            if (err.response) {
              // Lỗi từ server
              errorMessage = err.response.data.message || errorMessage;
            } else if (err.request) {
              // Không nhận được phản hồi
              errorMessage = 'Không thể kết nối đến máy chủ';
              
              alert('Không thể kết nối đến máy chủ');
            }
            
            setSubmitError(errorMessage);
            console.error('Login error:', err);
          } finally {
            setIsSubmitting(false);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={cx('container')}>
            <form>
                <div className={cx('mb-4')}>
                    <input
                        type="text"
                        name="username"
                        placeholder="tài khoản"
                        className={cx('input')}
                        value={formData.username}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                </div>
                {errors.username && <p className={cx('error')}>{errors.username}</p>}
                <div className={cx('mb-4')}>
                    <input
                        type="password"
                        name="password"
                        placeholder="Mật khẩu"
                        className={cx('input')}
                        value={formData.password}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                </div>
                {errors.password && <p className={cx('error')}>{errors.password}</p>}
                <div className={cx('mb-4')}>
                    <button type="submit" 
                    onClick={handleSubmit} 
                    className={cx('button', 'login', 'primary')}
                    disabled={isSubmitting || Object.keys(errors).length > 0}
                    >
                        {isSubmitting ? 'Đang xử lý...' : 'Đăng nhập'}
                    </button>
                </div>
                {submitError && <div className={cx('error')}>{submitError}</div>}
                <div className={cx('text-center', 'mb-4')}>
                    <a href="#" className={cx('link')}>
                        Quên mật khẩu?
                    </a>
                </div>
                <hr className={cx('mb-4')} />
                <div className={cx('text-center')}>
                    <button type="button" onClick={() => navigate('/register')} className={cx('button', 'signup')}>
                        Tạo tài khoản mới
                    </button>
                </div>
            </form>
        </div>
);
}

function Footer() {
    return (
        <div className={cx('footer')}>
            <p>
                <span className={cx('bold')}>Tạo Trang</span> dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
            </p>
        </div>
    );
}

function LoginForm() {
    return (
        <div className={cx('body1')}>
            <App />
            <Footer />
        </div>
    );
}

export default LoginForm;