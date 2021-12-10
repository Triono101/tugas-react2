import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Content = () => {
        return(
            <>
                <div className="container text-center" id="bio">
                    <h3 className="fw-bold fs-2">My Bio</h3>
                    <p className="fs-6">
                        Halo, perkenalkan nama saya Triono. <br/> Saat ini saya sedang mengikuti
                        pendidikan nonformal di lembaga pendidikan pemrograman Eduwork,
                        dalam kelas Fullstack Web Developer - MERN. Pekerjaan saya sebelumnya adalah bekerja sebagai buruh
                        pabrik di Korea Selatan selama 4,5 tahun, dan pulang ke Indonesia tahun 2019. Karena selama pandemi ini saya
                        lebih sering berada di rumah, saya ingin meningkatkan skill saya dalam dunia digital dan pemrograman web, yang pada
                        akhirnya saya memutuskan untuk masuk kedalam kelas bimbingan online di Eduwork.
                    </p>
                
                    <br /><br />
                    <div className="row">
                        <div className="col">
                            <h6 className="fw-bold fs-3">Skills</h6>
                            <p className="fs-6">
                            I am fluent in Javanese and Indonesian, in addition to being able of speaking English and Korean as well. I also Capable of using measurement tools such as Caliper, Micrometer and Dial gauge.
                            </p>
                        </div>
                        <div className="col">
                            <h6 className="fw-bold fs-3">Other Skills</h6>
                            <p className="fs-6">
                            Makan & Tidur, introspeksi diri, mengaji, menghormati orang tua, andhap asor, menghabiskan waktu sehari-hari, serta bersahabat dekat dengan rebahan, me-time dan kegabutan.
                            </p>
                        </div>
                    </div>
                </div>
                <br /><br />
                <div className="container text-center">
                    <h6 className="fw-bold fs-3">Kelompok Duapuluh atau G20</h6>
                    <p className="fs-6">
                        G20 adalah kelompok yang terdiri 19 negara dengan perekonomian besar di dunia ditambah dengan Uni Eropa.
                        Kelompok ini dibentuk tahun 1999 sebagai forum antar pemerintah yang secara sistematis menghimpun kekuatan-kekuatan ekonomi maju dan berkembang untuk membahas isu-isu penting perekonomian dunia.
                    </p>
                </div>
            </>
        )
    }

export default Content;