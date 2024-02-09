import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const CustomDiv = styled.div`
padding : 16px;
background-color: #f0f0f0;
`;

function CompanyProfile({companyData}) {
    console.log(companyData);
    const [data, setData] = useState("None");
    useEffect(() => {
        setData("Nissi Bintaro Campus")
    }, [])
    return (
        <CustomDiv>
            <p style={
                {
                    fontSize: "24px",
                    color: "salmon"
                }
            }>
                Company Profile </p>
            <h1> Company Name : {data}</h1>
            <button onClick={() => setData("PT Infodev Niaga Internet")}>
                Add Company Name
            </button>
            
            <h3> Company Name : {companyData.name}</h3>
            <h3> Company Address : {companyData.address}</h3>
        </CustomDiv>
    )
}

export default CompanyProfile