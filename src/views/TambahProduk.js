import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

const TambahProduk = (props) => {
    const redirect = useHistory();
    const [nama_produk, setNamaProduk] = useState('');
    const [keterangan, setKeterangan] = useState('');
    const [jumlah, setJumlah] = useState();
    const [harga, setHarga] = useState();

    const [error, setError] = useState();

    const record = { nama_produk, keterangan, jumlah, harga };

    const store = async (e) => {
        e.preventDefault();
        try {
            setError(null);
            let response = await axios.post(`http://localhost:8080/api/produk`, record);
            redirect.push('/');
        } catch (err) {
            setError(err.response.data);
        }
    }

    return (
        <div className="w-100 vh-100 bg-dark d-flex justify-content-center">
            <div style={{ width: '500px' }} className="card my-4">
                <div className="card-body">
                    <h3 className="font-weight-bold text-center py-4"><i><u>Tambah Produk</u></i></h3>
                    <form onSubmit={store}>
                        <div className="form-group">
                            <label htmlFor="nama_produk">Nama Produk</label>
                            <input type="text" onChange={e => setNamaProduk(e.target.value)} value={nama_produk} name="nama_produk" id="nama_produk" className={`form-control ${error ? "is-invalid" : ""}`} required/>
                            {error ? <div className="invalid-feedback">Nama Produk minimal 4 Karakter</div> : ""}
                        </div>
                        <div className="form-group">
                            <label htmlFor="keterangan">Keterangan</label>
                            <textarea style={{ resize: 'none' }} onChange={e => setKeterangan(e.target.value)} value={keterangan} name="keterangan" id="keterangan" rows="3" className="form-control"></textarea>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <label htmlFor="harga">Rp.</label>
                                <input type="number" onChange={e => setHarga(e.target.value)} value={harga} name="harga" id="harga" className="form-control" required/>
                            </div>
                            <div className="col">
                                <label htmlFor="jumlah">Jumlah</label>
                                <input type="number" onChange={e => setJumlah(e.target.value)} value={jumlah} name="jumlah" id="jumlah" className="form-control" required/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-dark btn-block mt-4">Tambah</button>
                        <div className="text-center py-4">
                            <Link to="/">← Kembali ke Home.</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TambahProduk;