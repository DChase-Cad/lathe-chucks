import React from 'react'
import { MANUFACTURERS } from '../shared/ManufacturerCards'
import { Card, CardImg, CardBody, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';


export default function Home() {
    let mfgs = MANUFACTURERS.sort((a, b) => (a.name > b.name) ? 1 : -1)
    return (
        <>
            <div className="row row-content justify-content-center py-3 w-100  content ">
                <h1 className="text-center mx-auto py-4 font-weight-bold w-100 m-auto">Manufacturers we represent:</h1>

                {mfgs.map((mfg, i) => {
                    return (
                        <div key={mfg.name} className='col-12 col-sm-6 col-lg-4 col-xl-3 align-self-center align-content-center'>
                            <Link className='mfg-card-hover' to={`/${mfg.path}`}>
                                <Card className="my-2 h-100 mfg-card text-center overflow-none">
                                    <h3 className="mfg-card-header mw-100 h-25 font-weight-bold text-nowrap">{mfg.name}</h3>
                                    <CardImg className="w-75 mfg-card-img m-auto" src={mfg.logo} />
                                    <CardBody className="mt-1 mfg-body d-none d-md-block">
                                        <p>{mfg.desc}</p>
                                    </CardBody>
                                    <CardFooter>
                                        <span className="my-1 p-0 card-foot">Made in: </span><span className="font-weight-bold">{mfg.country}</span>
                                    </CardFooter>
                                </Card>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>

    )
}
