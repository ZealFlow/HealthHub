'use client';
import { useRouter } from 'next/navigation';

export default function FormRegister() {
    const router = useRouter();

    function handleSubmit() {
        // Get the values from the form fields
        const firstname = document.querySelector('input[name="firstname"]').value;
        const lastname = document.querySelector('input[name="lastname"]').value;
        const username = document.querySelector('input[name="username"]').value;
        const identification = document.querySelector('input[name="identification"]').value;
        const password = document.querySelector('input[name="password"]').value;
        const dob = document.querySelector('input[name="dob"]').value;
    
        // Create an object with the form data
        const formData = {
            userProfileData: {
                firstname,
                lastname,
                username,
                email: identification
            },
            credentialData: {
                password
            },
            dob
        };
    
        // Send the form data to the server
        fetch('http://localhost:3001/auth/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.ok) {
                    router.push('/');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    
    

    return (
        <>
            <div className="w-auto px-8 bg-blue-50 rounded-md">
                <div className="form__header py-4">
                    <div className="form__header__title text-xl">
                        Đăng ký tài khoản
                    </div>
                    <label className="form__header__subtitle">Thật nhanh chóng và dễ dàng.</label>
                </div>
                <div className="form__body py-4">
                    <div className="form__body__fullname py-2">
                        <input type="text" placeholder="Tên" className="border-2 h-12 p-3 mr-4" name="firstname" />
                        <input type="text" placeholder="Họ đệm" className="border-2 h-12 p-3" name="lastname" />
                    </div>
                    <div className="form__body__username py-2">
                        <input type="text" placeholder="Username" className="border-2 h-12 p-3 w-full" name="username" />
                    </div>
                    <div className="form__body__identification py-2">
                        <input type="text" placeholder="Số điện thoại hoặc Email" className="border-2 h-12 p-3 w-full" name="identification" />
                    </div>
                    <div className="form__body__password py-2">
                        <input type="password" placeholder="Đặt mật khẩu" className="border-2 h-12 p-3 w-full" name="password" />
                    </div>
                    <div className="form__body__dob py-2">
                        <label>Ngày sinh</label>
                        <div className="form__body__dob_box">
                            <input type="date" className="border-2 h-12 p-3 w-full" name="dob" />
                        </div>
                    </div>
                    <div className="form__body__gender py-2">
                        <label>Giới tính</label>
                        <div className="form__body__gender__box flex justify-between w-full">
                            <div className="form__body__gender__type">
                                <label>Nam</label>
                                <input type="radio" />
                            </div>
                            <div className="form__body__gender__type">
                                <label>Nữ</label>
                                <input type="radio" />
                            </div>
                            <div className="form__body__gender__type">
                                <label>Khác</label>
                                <input type="radio" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form__footer py-4">
                    <div className="form__footer__cta">
                        <button type="button" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Đăng ký</button>
                    </div>
                </div>
            </div>
        </>
    );
};