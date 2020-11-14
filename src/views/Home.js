import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Import Components
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Header from '../components/Header';

const Home = (props) => {
    const [produk, setProduk] = useState([]);

    const getProduk = async () => {
        try {
            let response = await axios.get('http://localhost:8080/api/produk');
            setProduk(response.data.data);
        } catch (err) {
            console.log(err.response);
        }
    }

    useEffect(() => {
        getProduk();
    }, [])

    return (
        <div>
            <Navbar brand="Arkcrud" />

            <Jumbotron>
                <h1 className="display-4 font font-weight-bold">Selamat Datang di Arkcrud!</h1>
                <hr className="my-4"/>
                <a className="btn btn-outline-dark btn-lg" href="#table">Lihat Table</a>
            </Jumbotron>

            <section id="table" className="mb-5">
                <div className="container-fluid">
                    <Header title="Produk"/>
                    <table className="table table-hover text-center">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Nama Produk</th>
                                <th scope="col">Keterangan</th>
                                <th scope="col">Harga</th>
                                <th scope="col">Jumlah</th>
                                <th scope="col">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                produk.map((p, index) => {
                                    const harga = p.harga;
                                    return (
                                        <tr key={index}>
                                            <th>{index+1}</th>
                                            <td>{p.nama_produk}</td>
                                            <td>{p.keterangan}</td>
                                            <td>Rp.{p.harga}</td>
                                            <td>{p.jumlah}</td>
                                            <td>
                                                <Link style={{ width: '70px' }} className="btn btn-outline-primary btn-sm mr-2" to={`/produk/${p.id}/edit`}>Edit</Link>
                                                <Link style={{ width: '70px' }} className="btn btn-outline-danger btn-sm" to={`/produk/${p.id}/delete`}>Delete</Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </section>

            <hr className="my-4"/>

            <div className="d-flex justify-content-center">
                <p className="text-secondary text-center">
                    © 2020 — Now Rizki Ramadhan
                    <br/>
                    Made in Jakarta, Indonesia.
                </p>
            </div>

        </div>
    )
}

export default Home;