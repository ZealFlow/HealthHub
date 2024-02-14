'use client';

export default function FormLogin() {

    function handleLogin() {
        const usernameInput: HTMLInputElement | null = document.querySelector('input[name="username"]');
        const passwordInput: HTMLInputElement | null = document.querySelector('input[name="password"]');

        if (usernameInput !== null && passwordInput !== null) {
            const username = usernameInput.value;
            const password = passwordInput.value;

            const formData = {
                username,
                password
            };

            fetch('http://localhost:3001/auth/login', { 
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
                .then(response => {
                    if (response.ok) console.log('Success response');
                })
        }
    }

    return (
        <>
            <div className="w-auto px-8 bg-blue-50 rounded-md">
                <div className="form__header py-4">
                    <div className="form__header__title text-xl">
                        Đăng nhập
                    </div>
                </div>
                <div className="form__body py-4">
                    <div className="form__body__identification py-2">
                        <input type="text" placeholder="Username / Email" className="border-2 h-12 p-3 w-96" name="username" />
                    </div>
                    <div className="form__body__password py-2">
                        <input type="password" placeholder="Nhập mật khẩu" className="border-2 h-12 p-3 w-96" name="password" />
                    </div>
                </div>
                <div className="form__footer py-4">
                    <div className="form__footer__cta">
                        <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Đăng nhập</button>
                    </div>
                </div>
            </div>
        </>
    );
};