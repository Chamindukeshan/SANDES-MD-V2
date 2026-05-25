//=============================================================================

//  ███████╗  █████╗  ███╗   ██╗ ██████╗  ███████╗ ███████╗    ███╗   ███╗ ██████╗          
//  ██╔════╝ ██╔══██╗ ████╗  ██║ ██╔══██╗ ██╔════╝ ██╔════╝    ████╗ ████║ ██╔══██╗               
//  ╚█████╗  ███████║ ██╔██╗ ██║ ██║  ██║ █████╗   ███████╗    ██╔████╔██║ ██║  ██║                    
//   ╚═══██╗ ██╔══██║ ██║╚██╗██║ ██║  ██║ ██╔══╝   ╚════██║    ██║╚██╔╝██║ ██║  ██║             
//  ██████╔╝ ██║  ██║ ██║ ╚████║ ██████╔╝ ███████╗ ███████║    ██║ ╚═╝ ██║ ██████╔╝                       
//  ╚═════╝  ╚═╝  ╚═╝ ╚═╝  ╚═══╝ ╚═════╝  ╚══════╝ ╚══════╝    ╚═╝     ╚═╝ ╚═════╝      
//  
// © SANDES MD 2026 | MADE BY MR.SANDES 🍒 | ALL RIGHTS RESERVED !

//===========================================================================

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BEUzlbDJ#AOd_LBCqc9AF5jHp8y2A2cA0cDNor13ed4CRB2h2dqQ",
ALIVE_IMG : process.env.ALIVE_IMG || "https://upld.zone.id/uploads/d4i0x5iq/sandes-md-v2.webp",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false", 
};
