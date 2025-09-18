import React from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom';

export default function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:8080/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Đăng nhập thất bại');
            }

            console.log('Đăng nhập thành công:', result);
            console.log("data user: " + result.user.firstName + " " + result.user.lastName + " " + result.user.email)
            window.alert(result.message + " " + result.token);

            if (result.token) {
                localStorage.setItem('token', result.token);
                // Chuyển hướng
            }
        } catch (error) {
            console.error('Lỗi khi đăng nhập:', error.message);
            alert(error.message);
        }
    };

    return (
        <div className='d-flex justify-content-center'>
            <div className='d-flex justify-content-center w-50' style={{ marginBottom: '150px' }}>
                <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto mt-5">
                    <h3 className="text-center mb-4">Đăng nhập</h3>

                    {/* Email */}
                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            {...register('email', {
                                required: 'Email là bắt buộc',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Email không hợp lệ',
                                },
                            })}
                        />
                        {errors.email && (
                            <p className="text-danger">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <label>Mật khẩu</label>
                        <input
                            type="password"
                            className="form-control"
                            {...register('password', {
                                required: 'Mật khẩu là bắt buộc',
                                minLength: {
                                    value: 6,
                                    message: 'Mật khẩu phải ít nhất 6 ký tự',
                                },
                            })}
                        />
                        {errors.password && (
                            <p className="text-danger">{errors.password.message}</p>
                        )}
                    </div>
                    <div className='mt-3 d-flex justify-content-center'>
                        <button type="submit" className="btn btn-primary w-50">
                            Đăng nhập
                        </button>
                    </div>
                    <p className='mt-4'>Đã có tài khoản ? <NavLink to="/register"> Đăng ký</NavLink> </p>
                </form>

            </div>

        </div>
    )
}
