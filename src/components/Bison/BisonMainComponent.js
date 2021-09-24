import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs } from 'react-bootstrap';
import { Card, CardImg, CardBody } from 'reactstrap';

export default function BisonMain() {
    return (
        <div className="row row-content justify-content-center w-100">
            <img className="w-25 mb-4"
                src={`../assets/img/mfg/bison.svg`}
                alt="logo" />
            <Tabs defaultActiveKey="3" transition={true} mountOnEnter={true} id='bison-3-jaw' className="px-3 w-100 d-flex justify-content-between">
                <Tab unmountOnExit={true} className='w-100 bison-tab-height d-flex align-items-center' eventKey="3" title="3-Jaw Manual Chucks">
                    <>
                        <div className="row d-flex">
                            <Card className="my-2 p-0 col-sm-4 col-lg-3 h-100 mfg-card text-center overflow-none">
                                <h3 className="mfg-card-header w-100 h-25 font-weight-bold text-nowrap">Set-Tru Adjustable</h3>
                                <CardImg className="w-50 mx-auto" src={'../assets/img/chucks/3j_set_tru.png'} />
                                <CardBody className="mt-1 mfg-body d-none-block">
                                    <p className="pt-5">These chucks have adjustable screws on the O.D. to allow you the ability to true the chuck on a fine scale whenever you desire.</p>
                                </CardBody>
                            </Card>
                            <Card className="my-2 p-0 col-sm-4 col-lg-3 h-100 mfg-card text-center overflow-none">
                                <h3 className="mfg-card-header mw-100 h-25 font-weight-bold text-nowrap">Forged-Steel Body</h3>
                                <CardImg className="w-50 mx-auto" src={'../assets/img/chucks/3j_set_tru.png'} />
                                <CardBody className="mt-1 mfg-body ">
                                    <p className="pt-5">These forged steel body chucks give superior strength and R.P.M. capabilities.</p>
                                </CardBody>
                            </Card>
                            <Card className="my-2 p-0 col-sm-4 col-lg-3 h-100 mfg-card text-center overflow-none">
                                <h3 className="mfg-card-header mw-100 h-25 font-weight-bold text-nowrap">Semi-Steel Body</h3>
                                <CardImg className="w-50 mx-auto" src={'../assets/img/chucks/3j_set_tru.png'} />
                                <CardBody className="mt-1 mfg-body ">
                                    <p className="pt-5">These semi-steel body chucks are a lighter duty chuck built for performance at an affordable price point.</p>
                                </CardBody>
                            </Card>
                            <Card className="my-2 p-0 col-sm-4 col-lg-3 h-100 mfg-card text-center overflow-none">
                                <h3 className="mfg-card-header mw-100 h-25 font-weight-bold text-nowrap">Oil Country</h3>
                                <CardImg className="w-50 mx-auto" src={'../assets/img/chucks/3j_set_tru.png'} />
                                <CardBody className="mt-1 mfg-body ">
                                    <p className="pt-5">These chucks are the cream of the crop!  Engineered for the ultimate strength, durability, and performance.</p>
                                </CardBody>
                            </Card>
                        </div>
                    </>
                </Tab>
                <Tab className='w-100 bison-tab-height d-flex align-items-center' eventKey="4" activeKey='4' title="4-Jaw Manual Chucks">
                    <div className="row d-flex">
                        <Card className="my-2 p-0 col-sm-4 col-lg-3 h-100 mfg-card text-center overflow-none">
                            <h3 className="mfg-card-header w-100 h-25 font-weight-bold text-nowrap">Set-Tru Adjustable</h3>
                            <CardImg className="w-50 mx-auto" src={'../assets/img/chucks/3j_set_tru.png'} />
                            <CardBody className="mt-1 mfg-body d-none-block">
                                <p className="pt-5">These chucks have adjustable screws on the O.D. to allow you the ability to true the chuck on a fine scale whenever you desire.</p>
                            </CardBody>
                        </Card>
                        <Card className="my-2 p-0 col-sm-4 col-lg-3 h-100 mfg-card text-center overflow-none">
                            <h3 className="mfg-card-header mw-100 h-25 font-weight-bold text-nowrap">Forged-Steel Body</h3>
                            <CardImg className="w-50 mx-auto" src={'../assets/img/chucks/3j_set_tru.png'} />
                            <CardBody className="mt-1 mfg-body ">
                                <p className="pt-5">These forged steel body chucks give superior strength and R.P.M. capabilities.</p>
                            </CardBody>
                        </Card>
                        <Card className="my-2 p-0 col-sm-4 col-lg-3 h-100 mfg-card text-center overflow-none">
                            <h3 className="mfg-card-header mw-100 h-25 font-weight-bold text-nowrap">Semi-Steel Body</h3>
                            <CardImg className="w-50 mx-auto" src={'../assets/img/chucks/3j_set_tru.png'} />
                            <CardBody className="mt-1 mfg-body ">
                                <p className="pt-5">These semi-steel body chucks are a lighter duty chuck built for performance at an affordable price point.</p>
                            </CardBody>
                        </Card>
                        <Card className="my-2 p-0 col-sm-4 col-lg-3 h-100 mfg-card text-center overflow-none">
                            <h3 className="mfg-card-header mw-100 h-25 font-weight-bold text-nowrap">Oil Country</h3>
                            <CardImg className="w-50 mx-auto" src={'../assets/img/chucks/3j_set_tru.png'} />
                            <CardBody className="mt-1 mfg-body ">
                                <p className="pt-5">These chucks are the cream of the crop!  Engineered for the ultimate strength, durability, and performance.</p>
                            </CardBody>
                        </Card>
                    </div>
                </Tab>
                <Tab className='w-25' eventKey="6" title="6-Jaw Manual Chucks" >
                    <p>6 jaw chucks</p>
                </Tab>
                <Tab className='w-25' eventKey="OilC" title="Oil Country Chucks" >
                    <p>oil country</p>
                </Tab>
                <Tab className='w-25' eventKey="special" title="Specialty Chucks" >
                    <p>Specialty</p>
                </Tab>
                <Tab className='w-25' eventKey="power" title="Power chucks" >
                    <p>Power chucks</p>
                </Tab>
            </Tabs>
        </div>
    );
}