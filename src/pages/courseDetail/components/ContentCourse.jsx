import React, { useEffect, useRef } from 'react'
let $ = window.$


export default function ContentCourse({ content = [] }) {
    let ref = useRef();

    useEffect(() => {
        $(ref.current).find('.accordion__title').on('click', function (e) {
            e.preventDefault();
            // $(this).closest('.accordion').siblings('.active').removeClass('active')
            $(this).next().stop().slideToggle(200);

            let $accordion = $(this).closest('.accordion');
            if ($accordion.hasClass('active')) {
                $accordion.removeClass('active')
            } else {
                $accordion.addClass('active')
            }
            $(this).closest('.accordion').siblings('.active').removeClass('active').find('.content').stop().slideUp(200);
        })
    }, [])


    return (
        <div ref={ref}>
            {
                content.map((e, i) => <Accordion key={i} {...e} order={i + 1} />)
            }
        </div>
    )
}


function Accordion({ title, content, learn_date, order, exercise, slide }) {
    return (
        <div className="accordion">
            <div className="accordion__title">
                <div className="date">Ngày {order}</div>
                <h3>{title}</h3>
                <time className="date time">{learn_date}</time>

            </div>
            <div className="content">
                <div dangerouslySetInnerHTML={{ __html: content }}></div>
                {
                    slide.source &&
                    <div className="ct-row">
                        <p>
                            <strong>Slide: </strong>
                            <a href={slide?.source} target="_blank">{slide?.source}</a>
                        </p>
                    </div>
                }
                {
                    exercise &&
                    <div className="ct-row">

                        <p style={{ marginTop: 10 }}><strong>Bài tập: </strong> </p>
                        <div className="exercise" style={{ marginTop: 10 }} dangerouslySetInnerHTML={{ __html: exercise }}></div>
                        <div style={{ marginTop: 10 }}><strong>Nộp bài tập: </strong> <br />
                        Note: Chỉ chấp nhận file zip, tối đa 4MB <br />
                            <input type="hidden" name="date" className="date_exercise" value="1" />
                            <input className="upload_exercise" type="file" name="file" accept=".zip" />
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}