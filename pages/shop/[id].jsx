import MainLayout from "@/components/MainLayout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ApiClient from "@/api/ApiClient";

function ShopDetail() {
    const router = useRouter();
    const { id } = router.query;

    const [shop, setShop] = useState(null);

    useEffect(() => {
        if (!id) {
            return;
        }

        const fetchShopData = async () => {
            try {
                const response = await ApiClient.get(`/shop/${id}`);
                console.log('API response:', response);
                setShop(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchShopData();
    }, [id]);

    return (
        <MainLayout>
            {shop ? (
                <>
                    <h1>{shop.name}</h1>
                    <p>{shop.description}</p>
                    <h2>Products:</h2>
                    <ul>
                        {shop.products.map((product) => (
                            <li key={product.id}>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </MainLayout>
    );
}

export default ShopDetail;
