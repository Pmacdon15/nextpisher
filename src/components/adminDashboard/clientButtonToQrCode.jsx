'use client';
import Button from "@mui/material/Button";
import { useRouter } from "next/router";


export default function ClientButtonToQrCode({ siteName }) {
    // const router = useRouter();
    return (        
        <Button  variant="contained" color="success">
        Qr Code
      </Button>
       
    );
}

// onClick={() => router.push(`/admin/QrCode/${siteName}`)