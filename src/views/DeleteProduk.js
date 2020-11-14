import axios from 'axios';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const DeleteProduk = (props) => {
    const { id } = useParams();
    const redirect = useHistory();

    const deleteProduk = async () => {
        let response = await axios.delete(`http://localhost:8080/api/produk/${id}`);
        alert(response.data.message);
        redirect.push('/');
    }

    useEffect(() => {
        deleteProduk();
    }, [])

    return(
        <div>
            
        </div>
    )
}

export default DeleteProduk;