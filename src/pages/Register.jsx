import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function Register() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await fetch('http://localhost:8080/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            // Lấy JSON từ backend dù success hay lỗi
            const result = await response.json();

            if (!response.ok) {
                // Ném lỗi với message backend trả về (ví dụ email đã dùng)
                throw new Error(result.message || 'Lỗi khi gửi dữ liệu');
            }

            window.alert(result.message); // "Đăng ký thành công"
            console.log('Đăng ký thành công:', result);

            reset(); // reset form sau khi submit
            navigate('/login')
        } catch (err) {
            // Hiển thị lỗi backend hoặc lỗi khác
            console.error(err);
            window.alert(err.message);
        }
    };

  return (
    <div className='d-flex justify-content-center'>
        <div className='d-flex justify-content-center w-50'>
            <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto mt-5">
                {/* First Name */}
                <div className="mb-3">
                    <label>First Name</label>
                    <input
                        className="form-control"
                        {...register("firstName", { required: "First name là bắt buộc" })}
                    />
                    {errors.firstName && (
                        <p className="text-danger">{errors.firstName.message}</p>
                    )}
                </div>

                {/* Last Name */}
                <div className="mb-3">
                    <label>Last Name</label>
                    <input
                        className="form-control"
                        {...register("lastName", { required: "Last name là bắt buộc" })}
                    />
                    {errors.lastName && (
                        <p className="text-danger">{errors.lastName.message}</p>
                    )}
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        {...register("email", {
                            required: "Email là bắt buộc",
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Email không hợp lệ"
                            }
                        })}
                    />
                    {errors.email && (
                        <p className="text-danger">{errors.email.message}</p>
                    )}
                </div>

                {/* Password */}
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        {...register("password", {
                            required: "Mật khẩu là bắt buộc",
                            minLength: {
                                value: 6,
                                message: "Mật khẩu ít nhất 6 ký tự"
                            }
                        })}
                    />
                    {errors.password && (
                        <p className="text-danger">{errors.password.message}</p>
                    )}
                </div>

                {/* Role */}
                <div className="mb-3">
                    <label>Role</label>
                    <select
                        className="form-select"
                        {...register("role", { required: "Vui lòng chọn role" })}
                    >
                        <option value="">-- Chọn vai trò --</option>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                    {errors.role && <p className="text-danger">{errors.role.message}</p>}
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Đăng ký
                </button>
            </form>
        </div>
            
        </div>
  )
}
