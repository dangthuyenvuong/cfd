import { useState } from 'react';
import Banner from './components/Banner';
import SectionCourse from './components/SectionCourse';
import Special from './components/Special';
import Comment from './components/Comment';

export default function Home({ label, name }) {

    let [count, setCount] = useState(0);

    // let { label, name } = props;

    // let label = props.label
    // let name = props.name

    // label = 'asdfsdf'
    console.log('render')


    return <main>

        <Banner />
        <SectionCourse />
        <Special />
        <Comment />
        <section className="section team">
            <div className="container">
                <div className="course">
                    <h2 className="title">Chúng ta</h2>
                    <h2 className="type">Là một team</h2>
                </div>
                <div className="slider">
                    <div className="slider--item">
                        <img src="img/slider1.jpg" alt="" />
                    </div>
                    <div className="slider--item">
                        <img src="img/slider2.jpg" alt="" />
                    </div>
                    <div className="slider--item">
                        <img src="img/slider3.png" alt="" />
                    </div>
                    <div className="slider--item">
                        <img src="img/slider4.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className="section ready">
            <div className="container">
                <div className="inner__ready">
                    <h3>
                        Bạn đã sẵn sàng tham gia cùng CFD để tạo ra những sản phẩm có giá
                        trị chưa?
            </h3>
                    <a href="#" className="btn btn-round">Đăng ký</a>
                </div>
            </div>
        </section>
    </main>

}


