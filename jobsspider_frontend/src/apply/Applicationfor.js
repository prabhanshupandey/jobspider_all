import { Paper } from "@mui/material";

export default function ApplicationFor() {
    return (
        <div>
            <Paper
                style={{
                    width: "100%",
                    height: "45vh",
                    borderRadius: 20,
                    marginTop:50,
                    backgroundImage: "url('/background.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", padding: 30, gap:30 }}>
                    
                    <div
                        style={{
                            fontWeight: 700,
                            marginTop: 30,
                            fontSize: 30,
                            background: 'linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(204,16,16,1) 74%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        JobsSpider
                    </div>

                    <div style={{ fontSize: 20, fontWeight: 500 }} >
                        Application&nbsp;For
                    </div>
                    <div style={{ fontSize: 24, fontWeight: 500 }} >
                       Full-Stack Developer
                    </div>

                    <div style={{ fontSize: 20, fontWeight: 500 }}>

                        ₹ 0 - 0 per month <br />(Fixed + incentives)
                    </div>


                </div>
            </Paper>
            <div style={{ width: "25vw", display: 'flex', padding: 10, }}>
                <img src="Onboarding.png" style={{ width: "25vw" }} />
            </div>


        </div>
    );
}
