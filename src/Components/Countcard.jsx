import Container from "./Container";
import React from 'react';


const Countcard = ({inProgress, resolved} ) => {
   
    return (
        <div>
            <Container>
                <div className="grid grid-cols-2 gap-5 my-5">
                    <div className="h-[250px] rounded-lg bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] flex flex-col justify-center items-center text-[#ffff]  ">
                        <h1 className="font-medium text-xl">In-Progress</h1>
                    <p className="font-bold text-3xl" >{inProgress.length}</p>
                    </div>
                    <div className="h-[250px] rounded-lg bg-gradient-to-tr from-[#54CF68] to-[#00827A] flex flex-col justify-center items-center text-[#ffff]  ">
                        <h1 className="font-medium text-xl">Resolved</h1>
                        <p className="font-bold text-3xl" >{resolved.length}</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Countcard;