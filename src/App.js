import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Aboutus from "./components/Aboutus"
import { ProductsStyle1, ProductsStyle2, ProductsStyle3 } from "./components/Products"
import Contactus from "./components/Contactus";
import Home from "./components/Home";
import productJson from "./components/ProductPageList"
import Search from "./components/Search";
import Data from "./Data.json"

const theme = createTheme({
  palette: {
    primary: {
      main: "#F1A039",
      contrastText: '#fff',
    },

    neutral: {
      main: "#6561B2",
    },
  },

  // typography: {
  //   fontFamily: {
  //   }
  // },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<Aboutus />} />

            <Route exact path="/product/Inspection" element={<ProductsStyle1
              type={productJson.Inspection.type}
              name={productJson.Inspection.name}
              bg={productJson.Inspection.bg}
              icon={productJson.Inspection.icon}
              desktop={productJson.Inspection.desktop}
              mobile={productJson.Inspection.mobile}
              overview={productJson.Inspection.overview}
              detailTitle1={productJson.Inspection.details.details1.title}
              detailDes1={productJson.Inspection.details.details1.des}
              detailImage1={productJson.Inspection.details.details1.image}
              detailTitle2={productJson.Inspection.details.details2.title}
              detailDes2={productJson.Inspection.details.details2.des}
              detailImage2={productJson.Inspection.details.details2.image}
              detailTitle3={productJson.Inspection.details.details3.title}
              detailDes3={productJson.Inspection.details.details3.des}
              detailImage3={productJson.Inspection.details.details3.image}
              detailTitle4={productJson.Inspection.details.details4.title}
              detailDes4={productJson.Inspection.details.details4.des}
              detailImage4={productJson.Inspection.details.details4.image} />}
            />

            <Route exact path="/product/Diary" element={<ProductsStyle1
              type={productJson.Diary.type}
              name={productJson.Diary.name}
              bg={productJson.Diary.bg}
              icon={productJson.Diary.icon}
              desktop={productJson.Diary.desktop}
              mobile={productJson.Diary.mobile}
              overview={productJson.Diary.overview}
              detailTitle1={productJson.Diary.details.details1.title}
              detailDes1={productJson.Diary.details.details1.des}
              detailImage1={productJson.Diary.details.details1.image}
              detailTitle2={productJson.Diary.details.details2.title}
              detailDes2={productJson.Diary.details.details2.des}
              detailImage2={productJson.Diary.details.details2.image}
              detailTitle3={productJson.Diary.details.details3.title}
              detailDes3={productJson.Diary.details.details3.des}
              detailImage3={productJson.Diary.details.details3.image}
              detailTitle4={productJson.Diary.details.details4.title}
              detailDes4={productJson.Diary.details.details4.des}
              detailImage4={productJson.Diary.details.details4.image} />}
            />

            <Route exact path="/product/EDMS" element={<ProductsStyle1
              type={productJson.EDMS.type}
              name={productJson.EDMS.name}
              bg={productJson.EDMS.bg}
              icon={productJson.EDMS.icon}
              desktop={productJson.EDMS.desktop}
              mobile={productJson.EDMS.mobile}
              overview={productJson.EDMS.overview}
              detailTitle1={productJson.EDMS.details.details1.title}
              detailDes1={productJson.EDMS.details.details1.des}
              detailImage1={productJson.EDMS.details.details1.image}
              detailTitle2={productJson.EDMS.details.details2.title}
              detailDes2={productJson.EDMS.details.details2.des}
              detailImage2={productJson.EDMS.details.details2.image}
              detailTitle3={productJson.EDMS.details.details3.title}
              detailDes3={productJson.EDMS.details.details3.des}
              detailImage3={productJson.EDMS.details.details3.image} />}
            />

            <Route exact path="/product/BIM" element={<ProductsStyle2
              type={productJson.BIM.type}
              name={productJson.BIM.name}
              bg={productJson.BIM.bg}
              icon={productJson.BIM.icon}
              desktop={productJson.BIM.desktop}
              mobile={productJson.BIM.mobile}
              overview={productJson.BIM.overview}
              image={productJson.BIM.image} />}
            />

            <Route exact path="/product/KMS" element={<ProductsStyle3
              type={productJson.KMS.type}
              name={productJson.KMS.name}
              bg={productJson.KMS.bg}
              icon={productJson.KMS.icon}
              desktop={productJson.KMS.desktop}
              mobile={productJson.KMS.mobile}
              overview={productJson.KMS.overview}
              image={productJson.KMS.image}
              tableHeaders={productJson.KMS.tableHeader}
              tableList={productJson.KMS.table} />}
            />

            <Route exact path="/product/Analyse" element={<ProductsStyle2
              type={productJson.Analyse.type}
              name={productJson.Analyse.name}
              bg={productJson.Analyse.bg}
              icon={productJson.Analyse.icon}
              desktop={productJson.Analyse.desktop}
              mobile={productJson.Analyse.mobile}
              overview={productJson.Analyse.overview}
              image={productJson.Analyse.image} />}
            />

            <Route exact path="/product/Procurement" element={<ProductsStyle2
              type={productJson.Procurement.type}
              name={productJson.Procurement.name}
              bg={productJson.Procurement.bg}
              icon={productJson.Procurement.icon}
              desktop={productJson.Procurement.desktop}
              mobile={productJson.Procurement.mobile}
              overview={productJson.Procurement.overview}
              image={productJson.Procurement.image} />}
            />

            <Route exact path="/product/PhotoReg" element={<ProductsStyle2
              type={productJson.PhotoReg.type}
              name={productJson.PhotoReg.name}
              bg={productJson.PhotoReg.bg}
              icon={productJson.PhotoReg.icon}
              desktop={productJson.PhotoReg.desktop}
              mobile={productJson.PhotoReg.mobile}
              overview={productJson.PhotoReg.overview}
              image={productJson.PhotoReg.image} />}
            />

            <Route exact path="/product/Signature" element={<ProductsStyle2
              type={productJson.Signature.type}
              name={productJson.Signature.name}
              bg={productJson.Signature.bg}
              icon={productJson.Signature.icon}
              desktop={productJson.Signature.desktop}
              mobile={productJson.Signature.mobile}
              overview={productJson.Signature.overview}
              image={productJson.Signature.image} />}
            />

            <Route exact path="/contact" element={<Contactus />} />
            <Route path="/search" element={<Search data={Data}/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
