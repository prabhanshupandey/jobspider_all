import { Divider, Paper } from "@mui/material";
import bulb from "../assets/bulb.png";
import map from "../assets/map.png";
import Button from "@mui/material/Button";
import { useState } from "react";
import CityPopupComponent from "./CityPopupComponent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchCity from "./SearchCity";

export default function LocationDetailSecond({ progress = 5 }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showPreferredCities, setShowPreferredCities] = useState(true);
  const [clearClicked, setClearClicked] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [preferredCities, setPreferredCities] = useState([]);
  const [isSearchCityOpen, setIsSearchCityOpen] = useState(false); 

  const handleYesClick = () => {
    setSelectedOption("Yes");
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleDone = (cities) => {
    setPreferredCities(cities);
    setIsPopupOpen(false);
    setShowPreferredCities(true);
    setSelectedOption(null);
    setClearClicked(false);
  };

  const ChangeClick = () => {
    setIsPopupOpen(true);
  };
  const ChangeCity = () => {
    setIsSearchCityOpen(true); 
  };

  return (
    <div
      style={{
        background: "#fff",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid black",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
          backgroundColor: "pink",
          justifyContent: "center",
        }}
      >
        <Paper
          style={{
            width: "40%",
            height:
            clearClicked
            ? "393px" 
           : preferredCities.length > 0
              ? `${390 + preferredCities.length * 20}px`
              : selectedOption === "No"
              ? "63vh"
              : selectedOption === "Yes"
              ? "56vh"
              : "410px",
              transition: "height 0.3s ease-in-out",
          
            background: "#fff",
            borderRadius: "10px",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        >
          {/* Header Part */}
          <div
            style={{
              width: "93%",
              height: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: 15,
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowBackIcon style={{ marginRight: "5px" }} />
              Location Details
            </div>
            <div
              style={{
                width: "60%",
                height: 12,
                borderRadius: 8,
                backgroundColor: "#e5e7eb",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progress}%`,
                  backgroundColor: " #165B48",
                  borderRadius: "8px",
                  transition: "width 0.3s ease-in-out",
                }}
              />
            </div>
          </div>

          <Divider style={{ border: "0.5px light grey", borderRadius: "1px", width: "100%" }} />

          <div style={{ padding: "16px 32px" }}>
            {/* Current Location */}
            <div style={{ fontWeight: 600, fontSize: "14px", lineHeight: "20px" }}>
              Current Location
            </div>
            <div
              style={{
                fontSize: "12px",
                lineHeight: "16px",
                color: "#8C8594",
                marginTop: "4px",
              }}
            >
              Your current city will help us find you the best jobs
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginTop: "20px",
              }}
            >
              <div>
                <img src={map} style={{ width: "50px", height: "40px", objectFit: "cover" }} />
              </div>
              <div>
                <div style={{ fontSize: "14px", lineHeight: "20px" }}>BHEL, Bhopal, MP</div>
                <div
                  onClick={ChangeCity}
                  style={{
                    fontWeight: 600,
                    fontSize: "12px",
                    lineHeight: "16px",
                    color: "#1F8268",
                    cursor: "pointer",
                  }}
                >
                  Change
                </div>
              </div>
            </div>

            {/* Preferred Cities */}
            {showPreferredCities ? (
              <>
                <div style={{ display: "flex", paddingTop: "35px" }}>
                  <div style={{ fontWeight: 600, fontSize: "14px", lineHeight: "20px" }}>
                    Preferred job cities
                  </div>
                  <div
                    onClick={() => {
                      setShowPreferredCities(false);
                      setClearClicked(true);
                    }}
                    style={{
                      marginLeft: "auto",
                      fontSize: "12px",
                      lineHeight: "16px",
                      fontWeight: 600,
                      color: "#1F8268",
                      cursor: "pointer",
                    }}
                  >
                    Clear
                  </div>
                </div>

                <div
                  style={{
                    fontSize: "12px",
                    lineHeight: "16px",
                    marginTop: "4px",
                    color: "#8C8594",
                  }}
                >
                  This will enable us to find the best jobs at your preferred location
                </div>
            {/* shows selected city of the popupComponent on the prefferd cities section */}
                <div style={{ marginTop: "20px" }}>
                  {preferredCities.length > 0 ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        gap: "10px",
                      }}
                    >
                      <img src={map} style={{ width: "50px", height: "40px", objectFit: "cover" }} />
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        {preferredCities.map((city, index) => (
                          <div
                            key={index}
                            style={{
                              fontSize: "14px",
                              color: "black",
                            }}
                          >
                            {city}
                          </div>
                        ))}
                        <div
                          onClick={() => {
                            setShowPreferredCities(false);
                            setClearClicked(true);
                            setIsPopupOpen(true);
                          }}
                          style={{
                            color: "#1F8268",
                            fontWeight: 600,
                            fontSize: "14px",
                            cursor: "pointer",
                          }}
                        >
                          Change
                        </div>
                      </div>
                    </div>
                  ) : (
                    // by default current city shows section
                    <div style={{ display: "flex", gap: "12px" }}>
                      <div>
                        <img src={map} style={{ width: "50px", height: "40px", objectFit: "cover" }} />
                      </div>
                      <div>
                        <div style={{ fontSize: "14px", lineHeight: "20px" }}>
                          Bhopal Region, MP
                        </div>
                        <div
                          onClick={ChangeClick}
                          style={{
                            fontWeight: 600,
                            fontSize: "12px",
                            lineHeight: "16px",
                            color: "#1F8268",
                            cursor: "pointer",
                          }}
                        >
                          Change
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: "14px",
                    lineHeight: "20px",
                    marginTop: "30px",
                  }}
                >
                  Would you also like to explore jobs outside Bhopal?
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    lineHeight: "16px",
                    color: "#8C8594",
                    marginBottom: "0px",
                  }}
                >
                  This may require you to relocate to other cities
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    paddingTop: "12px",
                  }}
                >
                  <Button
                    onClick={handleYesClick}
                    sx={{
                      backgroundColor: selectedOption === "Yes" ? "#EAF8F4" : "#ffffff",
                      border: `2px solid ${
                        selectedOption === "Yes" ? "#BDE9DD" : "#c1bcc4"
                      }`,
                      color: selectedOption === "Yes" ? "#1F8268" : "#000000",
                      borderRadius: "2000px",
                      width: "270px",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#EAF8F4",
                        border: "2px solid #BDE9DD",
                        color: "#1F8268",
                      },
                    }}
                  >
                    Yes
                  </Button>

                  <Button
                    onClick={() => {
                      setSelectedOption("No");
                      setClearClicked(false);
                    }}
                    sx={{
                      backgroundColor: selectedOption === "No" ? "#EAF8F4" : "#ffffff",
                      border: `2px solid ${
                        selectedOption === "No" ? "#BDE9DD" : "#c1bcc4"
                      }`,
                      color: selectedOption === "No" ? "#1F8268" : "#000000",
                      borderRadius: "2000px",
                      width: "270px",
                      height: "40px",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#EAF8F4",
                        border: "2px solid #BDE9DD",
                        color: "#1F8268",
                      },
                    }}
                  >
                    No
                  </Button>
                </div>
                {/* when we click on the no button then this part shows */}
                {selectedOption === "No" && (
                  <div
                    style={{
                      marginTop: "10px",
                      fontSize: "12px",
                      borderRadius: "5px",
                      color: "#8E6F94",
                      background: "#FFFCED",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img src={bulb} style={{ width: "20px", height: "20px", objectFit: "contain" }} />
                    Add more cities to see jobs outside your current area
                  </div>
                )}
              </>
            )}
          </div>

          <Divider style={{ border: "0.5px light grey", borderRadius: "1px", width: "100%" }} />

          <div style={{ padding: 15 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: clearClicked ? "#94c5b9" : "#2D8A6D",
                color: "#fff",
                textTransform: "none",
                width: "100%",
                height: "50px",
                fontWeight: "bold",
                fontSize: "18px",
                "&:hover": {
                  backgroundColor: clearClicked ? "#94c5b9" : "#165B48",
                },
              }}
            >
              Next
            </Button>
          </div>
        </Paper>
        {/* CitypopComponent */}
        <CityPopupComponent
          open={isPopupOpen}
          onClose={handleClosePopup}
          onDone={handleDone}
        />
        {/* SearchCityComponent when click on the first change button*/}
          <SearchCity open={isSearchCityOpen} onClose={() => setIsSearchCityOpen(false)} />
      </div>
    </div>
  );
}
