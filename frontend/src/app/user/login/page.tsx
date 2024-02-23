'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import FormLogin from "../../../forms/formLogin";
import { useAppSelector } from '../../../../lib/redux/store';

export default function Login() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const isAuthenticated = useAppSelector(state => state.auth.loggedIn);

    useEffect(() => {
        console.log(isAuthenticated);
        if (isAuthenticated) {
            router.push('/');
        }
        else {
            setLoading(false);
        }
    }, [isAuthenticated, router]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <FormLogin/>
            </div>
        </>
    );
};
