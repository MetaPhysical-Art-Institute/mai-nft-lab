import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { MoralisProvider } from "react-moralis";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portal from "./pages/portal";
import Marketplace from "./pages/marketplace";
import Whitepaper from "./pages/whitepaper";
import Dao from "./pages/dao";
import Home from "./pages/home";


// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mainnet;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://kf1zohbhx5sl.usemoralis.com:2053/server" appId="PoG6CNty9Vluwe7F0xvS9AFZs0AeGZCqeJ54TkhB">
    <ThirdwebProvider desiredChainId={activeChainId}>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<App />}>
           <Route path="/pages/marketplace" element={<Marketplace />} />
           <Route path="/pages/whitepaper" element={<Whitepaper/>} />
           <Route path="/pages/portal" element={<Portal />} />
           <Route path="pages/dao" element={<Dao />} />
           <Route path="pages/home" element={<Home />} />
           <Route path="pages/artists/gyasi" element={<Gyasi />} />
           <Route path="pages/artists/mai" element={<Mai />} />
           <Route path="pages/artists/miton" element={<Milton />} />



         </Route>
       </Routes>
      </BrowserRouter>
    </ThirdwebProvider>
    </MoralisProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
