import React from 'react'
import '../../App.css'
import CardApi from './CardApi'
const Card = () => {
    return (
        <div>
                <div className="Cards">
                    {
                        CardApi.map((curElem) => {
                            const{image,title,Description,button,id,smallp}=curElem;
                            return(
                            <div class="card" key={id}>
                                <img src={image} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <p>{smallp}</p>
                                    <h5 class="card-title">{title}</h5>
                                    <p class="card-text">{Description}</p>
                                    <a href="#" class="btn btn-primary">{button}</a>
                                </div>
                            </div>)
                        })
                    }
                </div>
        </div>
    )
}

export default Card
