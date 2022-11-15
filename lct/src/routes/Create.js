import React from "react";

import BotPanel from "../components/create/BotPanel";
import Download from "../components/create/Download";
import Table from "../components/create/Table";
import View from "../components/create/View";

export default function Create() {
    
    return(
        <section className="create">
            <div className="create__top-bg">
                <div className="create__content _container">
                    <div className="create__top">
                        <div className="create__row">
                            <div className="create__download">
                                <Download/>
                            </div>
                            <div className="create__view">
                                <View/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="create__bot-bg">
                <div className="create__content _container">
                    <BotPanel/>
                </div>
            </div>
            <Table/>
        </section>
    )
}