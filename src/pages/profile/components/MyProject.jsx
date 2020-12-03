export default function MyProject() {
    return (
        <div className="tab__content-3">
            <div className="list__project">
                <div className="project">
                    <div className="project__image">
                        <img src="/img/img-project.jpg" alt="" />
                    </div>
                    <div className="project__info">
                        <div className="project__info--top">
                            <div className="project__info--title">Furnitown</div>
                            <p className="project__info--des">
                                Dự án hoàn thành trong khóa CFD1 Offline của CFD Team.</p>
                        </div>
                        <div className="project__info--details">
                            <div className="teacher">
                                <div className="avatar">
                                    <img src="/img/avt.png" alt="" />
                                </div>
                                <div className="name">
                                    Trần Nghĩa
                            </div>
                            </div>
                            <a href="#" className="btn btn-register">Website</a>
                        </div>
                    </div>

                </div>
                <div className="project">
                    <div className="project__image">
                        <img src="/img/img-project.jpg" alt="" />
                    </div>
                    <div className="project__info">
                        <div className="project__info--top">
                            <div className="project__info--title">
                                Gbox
                        </div>
                            <p className="project__info--des">
                                Dự án hoàn thành trong khóa CFD1 Offline của CFD Team.
                        </p>
                        </div>
                        <div className="project__info--details">
                            <div className="teacher">
                                <div className="avatar">
                                    <img src="/img/avt.png" alt="" />
                                </div>
                                <div className="name">
                                    Trần Nghĩa
                            </div>
                            </div>
                            <a href="#" className="btn btn-register">Website</a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="upload">
                <button type="button" className="btn btn-upload">
                    <img src="/img/upload.svg" alt="" />
                    TẢI LÊN
                  </button>
            </div>
        </div>
    )
}