import { styled } from "styled-components";
import { CartIcon } from "./icons/cart-icon";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useRouter } from "next/navigation";

const CartCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 2px 5px;
    font-size: 10px;
    

    background-color: var(--delete-color);
    color: white;

    margin-left: -10px;
`

const Container = styled.button`
    cursor: pointer;
    position: relative;
    border: none;
    background: transparent;
`

export function CartControl(){
    const router = useRouter()
    const { value } = useLocalStorage('cart-items', [])

    const handleNavigateToCart = () => {
        router.push("/cart")
    }

    return (
        <Container onClick={handleNavigateToCart}>
            <CartIcon/>
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}