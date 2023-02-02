import './movies.css';

import { useState } from "react";
import SvgIcon from "@mui/material/SvgIcon";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";


 export function ColorList() {
    const [bColor, setbColor] = useState();
    const styles = { backgroundColor: bColor, color: "black" };
    const Initial_colors = ["orange", "red", "yellow", "violet"];
    const [colors, setColors] = useState(Initial_colors);
    return (
      <div className="color-list">
        <TextField
          label="Enter Color"
          variant="outlined"
          value={bColor}
          style={styles}
          onChange={(event) => setbColor(event.target.value)}
          placeholder="Enter value"
        />
        <Button
          variant="contained"
          onClick={() => setColors([...colors, bColor])}
        >
          Add Color
        </Button>
        {/* Copy of colors and then add new color */}
        {/* <button onClick={() => setColors([...colors, bColor])}>Add Color</button> */}
        {colors.map((clr, index) => (
          <ColorBox key={index} color={clr} />
        ))}
      </div>
    );
  }

  export function ColorBox({ color }) {
    const styles = {
      height: "75px",
      width: "150px",
      background: color,
      margin: "10px 0px",
    };
    return <div style={styles}></div>;
  }