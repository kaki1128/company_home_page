import React, { useEffect } from 'react';
import { Box, Dialog, Modal, Popover } from '@mui/material';
import Lottie from 'react-lottie';
import img_0 from '../assets/image/img_0.png';
import { useState } from 'react';
import Home from "../pages/Home.js"


const openingSvg = {
	"v": "5.7.4", "fr": 29.9700012207031, "ip": 0, "op": 50.0000020365418, "w": 1920, "h": 1080, "nm": "Comp 1", "ddd": 0, "assets": [{ "id": "image_0", "w": 737, "h": 491, "u": "", "p": img_0, "e": 0 }, { "id": "comp_0", "layers": [{ "ddd": 0, "ind": 1, "ty": 2, "nm": "Layer 1", "refId": "image_0", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [495.562, 519.445, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [368.159, 245.43, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "ip": 0, "op": 90.0000036657751, "st": 0, "bm": 0 }] }], "layers": [{ "ddd": 0, "ind": 1, "ty": 4, "nm": "Shape Layer 3", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.857, "y": 0.888 }, "o": { "x": 0.941, "y": 0.435 }, "t": 14, "s": [1500, 540, 0], "to": [-221.167, 0, 0], "ti": [221.167, 0, 0] }, { "t": 40.0000016292334, "s": [173, 540, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [-100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 4], [0, 0], [0, 0], [0, 0]], "o": [[0, -4], [0, 0], [0, 0], [0, 0]], "v": [[-1132, -592], [-1860, -592], [-1856, 596], [-400, 596]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.168626987233, 0.380391977348, 0.443136985629, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 0, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.070588235294, 0.01568627451, 0.247058823529, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 90.0000036657751, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 2, "ty": 4, "nm": "Shape Layer 2", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 1, "k": [{ "i": { "x": 0.857, "y": 0.887 }, "o": { "x": 0.927, "y": 0.43 }, "t": 14, "s": [394, 540, 0], "to": [220.167, 0, 0], "ti": [-220.167, 0, 0] }, { "t": 40.0000016292334, "s": [1715, 540, 0] }], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, -100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ind": 0, "ty": "sh", "ix": 1, "ks": { "a": 0, "k": { "i": [[0, 4], [0, 0], [0, 0], [0, 0]], "o": [[0, -4], [0, 0], [0, 0], [0, 0]], "v": [[-1120, -592], [-1860, -592], [-1856, 596], [-400, 596]], "c": true }, "ix": 2 }, "nm": "Path 1", "mn": "ADBE Vector Shape - Group", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.168626987233, 0.380391977348, 0.443136985629, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 0, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [0.070588235294, 0.01568627451, 0.247058823529, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [0, 0], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Shape 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 90.0000036657751, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 4, "ty": 0, "nm": "logo", "refId": "comp_0", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [968, 544, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [500, 500, 0], "ix": 1, "l": 2 }, "s": { "a": 1, "k": [{ "i": { "x": [0.82, 0.82, 0.667], "y": [1, 1, 1] }, "o": { "x": [0.049, 0.049, 0.167], "y": [0.043, 0.043, -5.47] }, "t": 21, "s": [38, 38, 100] }, { "t": 40.0000016292334, "s": [0, 0, 100] }], "ix": 6, "x": "var $bm_rt;\n$bm_rt = transform.scale;", "l": 2 } }, "ao": 0, "w": 1000, "h": 1000, "ip": 0, "op": 90.0000036657751, "st": 0, "bm": 0 }, { "ddd": 0, "ind": 5, "ty": 4, "nm": "Shape Layer 1", "sr": 1, "ks": { "o": { "a": 0, "k": 100, "ix": 11 }, "r": { "a": 0, "k": 0, "ix": 10 }, "p": { "a": 0, "k": [960, 540, 0], "ix": 2, "l": 2 }, "a": { "a": 0, "k": [0, 0, 0], "ix": 1, "l": 2 }, "s": { "a": 0, "k": [100, 100, 100], "ix": 6, "l": 2 } }, "ao": 0, "shapes": [{ "ty": "gr", "it": [{ "ty": "rc", "d": 1, "s": { "a": 0, "k": [2220.438, 1203.703], "ix": 2 }, "p": { "a": 0, "k": [0, 0], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 4 }, "nm": "Rectangle Path 1", "mn": "ADBE Vector Shape - Rect", "hd": false }, { "ty": "st", "c": { "a": 0, "k": [0.168626987233, 0.380391977348, 0.443136985629, 1], "ix": 3 }, "o": { "a": 0, "k": 100, "ix": 4 }, "w": { "a": 0, "k": 0, "ix": 5 }, "lc": 1, "lj": 1, "ml": 4, "bm": 0, "nm": "Stroke 1", "mn": "ADBE Vector Graphic - Stroke", "hd": false }, { "ty": "fl", "c": { "a": 0, "k": [1, 1, 1, 1], "ix": 4 }, "o": { "a": 0, "k": 100, "ix": 5 }, "r": 1, "bm": 0, "nm": "Fill 1", "mn": "ADBE Vector Graphic - Fill", "hd": false }, { "ty": "tr", "p": { "a": 0, "k": [11.578, 12.688], "ix": 2 }, "a": { "a": 0, "k": [0, 0], "ix": 1 }, "s": { "a": 0, "k": [100, 100], "ix": 3 }, "r": { "a": 0, "k": 0, "ix": 6 }, "o": { "a": 0, "k": 100, "ix": 7 }, "sk": { "a": 0, "k": 0, "ix": 4 }, "sa": { "a": 0, "k": 0, "ix": 5 }, "nm": "Transform" }], "nm": "Rectangle 1", "np": 3, "cix": 2, "bm": 0, "ix": 1, "mn": "ADBE Vector Group", "hd": false }], "ip": 0, "op": 90.0000036657751, "st": 0, "bm": 0 }], "markers": []
}

export default function Opening() {

	const [open, setOpen] = useState(true);

	const defaultOptions = {
		loop: false,
		autoplay: true,
		animationData: openingSvg,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	};

	return (
		<Box>
			<Dialog fullScreen open={open}>
				<Lottie
					options={defaultOptions}
					height="100vh"

					eventListeners={[
						{
							eventName: 'complete',
							callback: () => setOpen(false),
						},
					]}
				/>
			</Dialog>

			{/* {open ? null : <Home />} */}

		</Box>
	)
}

