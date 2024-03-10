"use client"

import {useRouter} from "next/navigation";
import {useEffect} from "react";

const Home = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/home')
    }, [router]);

    return router;
}

export default Home;