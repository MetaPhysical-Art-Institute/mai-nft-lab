import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { MoralisProvider } from "react-moralis";
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Portal from "./pages/portal";
import Marketplace from "./pages/marketplace";
import Whitepaper from "./pages/whitepaper";
import Dao from "./pages/dao";
import Home from "./pages/home";
import Gyasi from "./pages/artists/gyasi/gyasi";
import Mai from "./pages/artists/mai/mai";




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
         <Route  path="/" element={<App/>}>
           <Route path="/pages/marketplace" element={<Marketplace />} />
           <Route path="/pages/whitepaper" element={<Whitepaper/>} />
           <Route path="/pages/portal" element={<Portal />} />
           <Route path="pages/dao" element={<Dao />} />
           <Route path="pages/home" element={<Home />} />
           <Route path="pages/artists/gyasi" element={<Gyasi />} />
           <Route path="pages/artists/mai" element={<Mai />} />
           <Route path="/discord" element={() => {window.location.href = 'https://discord.gg/GgAYeUpVkW';
           return null;
          }}/>
          <Route path="/vote" element={() => {window.location.href = 'https://mai-vote-dao.vercel.app';
           return null;
          }}/>
           <Route path="/" element={<Navigate to="/pages/home" replace />}></Route>
          



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
