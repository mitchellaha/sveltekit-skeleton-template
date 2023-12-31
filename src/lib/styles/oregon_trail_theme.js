
export const oregon_trail_theme = {
	name: 'oregon_trail_theme',
	properties: {
		/* =~= Theme Properties =~= */
		"--theme-font-family-base": "system-ui",
		"--theme-font-family-heading": "system-ui",
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "2px",
		"--theme-rounded-container": "2px",
		"--theme-border-base": "1px",
		/* =~= Theme On-X Colors =~= */
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		/* =~= Theme Colors  =~= */
		/* primary | #7890f0 */
		"--color-primary-50": "235 238 253", /* ⬅ #ebeefd */
		"--color-primary-100": "228 233 252", /* ⬅ #e4e9fc */
		"--color-primary-200": "221 227 251", /* ⬅ #dde3fb */
		"--color-primary-300": "201 211 249", /* ⬅ #c9d3f9 */
		"--color-primary-400": "161 177 245", /* ⬅ #a1b1f5 */
		"--color-primary-500": "120 144 240", /* ⬅ #7890f0 */
		"--color-primary-600": "108 130 216", /* ⬅ #6c82d8 */
		"--color-primary-700": "90 108 180", /* ⬅ #5a6cb4 */
		"--color-primary-800": "72 86 144", /* ⬅ #485690 */
		"--color-primary-900": "59 71 118", /* ⬅ #3b4776 */
		/* secondary | #58f0f0 */
		"--color-secondary-50": "230 253 253", /* ⬅ #e6fdfd */
		"--color-secondary-100": "222 252 252", /* ⬅ #defcfc */
		"--color-secondary-200": "213 251 251", /* ⬅ #d5fbfb */
		"--color-secondary-300": "188 249 249", /* ⬅ #bcf9f9 */
		"--color-secondary-400": "138 245 245", /* ⬅ #8af5f5 */
		"--color-secondary-500": "88 240 240", /* ⬅ #58f0f0 */
		"--color-secondary-600": "79 216 216", /* ⬅ #4fd8d8 */
		"--color-secondary-700": "66 180 180", /* ⬅ #42b4b4 */
		"--color-secondary-800": "53 144 144", /* ⬅ #359090 */
		"--color-secondary-900": "43 118 118", /* ⬅ #2b7676 */
		/* tertiary | #ff00ff */
		"--color-tertiary-50": "255 217 255", /* ⬅ #ffd9ff */
		"--color-tertiary-100": "255 204 255", /* ⬅ #ffccff */
		"--color-tertiary-200": "255 191 255", /* ⬅ #ffbfff */
		"--color-tertiary-300": "255 153 255", /* ⬅ #ff99ff */
		"--color-tertiary-400": "255 77 255", /* ⬅ #ff4dff */
		"--color-tertiary-500": "255 0 255", /* ⬅ #ff00ff */
		"--color-tertiary-600": "230 0 230", /* ⬅ #e600e6 */
		"--color-tertiary-700": "191 0 191", /* ⬅ #bf00bf */
		"--color-tertiary-800": "153 0 153", /* ⬅ #990099 */
		"--color-tertiary-900": "125 0 125", /* ⬅ #7d007d */
		/* success | #24d830 */
		"--color-success-50": "222 249 224", /* ⬅ #def9e0 */
		"--color-success-100": "211 247 214", /* ⬅ #d3f7d6 */
		"--color-success-200": "200 245 203", /* ⬅ #c8f5cb */
		"--color-success-300": "167 239 172", /* ⬅ #a7efac */
		"--color-success-400": "102 228 110", /* ⬅ #66e46e */
		"--color-success-500": "36 216 48", /* ⬅ #24d830 */
		"--color-success-600": "32 194 43", /* ⬅ #20c22b */
		"--color-success-700": "27 162 36", /* ⬅ #1ba224 */
		"--color-success-800": "22 130 29", /* ⬅ #16821d */
		"--color-success-900": "18 106 24", /* ⬅ #126a18 */
		/* warning | #ffff00 */
		"--color-warning-50": "255 255 217", /* ⬅ #ffffd9 */
		"--color-warning-100": "255 255 204", /* ⬅ #ffffcc */
		"--color-warning-200": "255 255 191", /* ⬅ #ffffbf */
		"--color-warning-300": "255 255 153", /* ⬅ #ffff99 */
		"--color-warning-400": "255 255 77", /* ⬅ #ffff4d */
		"--color-warning-500": "255 255 0", /* ⬅ #ffff00 */
		"--color-warning-600": "230 230 0", /* ⬅ #e6e600 */
		"--color-warning-700": "191 191 0", /* ⬅ #bfbf00 */
		"--color-warning-800": "153 153 0", /* ⬅ #999900 */
		"--color-warning-900": "125 125 0", /* ⬅ #7d7d00 */
		/* error | #f01818 */
		"--color-error-50": "253 220 220", /* ⬅ #fddcdc */
		"--color-error-100": "252 209 209", /* ⬅ #fcd1d1 */
		"--color-error-200": "251 197 197", /* ⬅ #fbc5c5 */
		"--color-error-300": "249 163 163", /* ⬅ #f9a3a3 */
		"--color-error-400": "245 93 93", /* ⬅ #f55d5d */
		"--color-error-500": "240 24 24", /* ⬅ #f01818 */
		"--color-error-600": "216 22 22", /* ⬅ #d81616 */
		"--color-error-700": "180 18 18", /* ⬅ #b41212 */
		"--color-error-800": "144 14 14", /* ⬅ #900e0e */
		"--color-error-900": "118 12 12", /* ⬅ #760c0c */
		/* surface | #242424 */
		"--color-surface-50": "222 222 222", /* ⬅ #dedede */
		"--color-surface-100": "211 211 211", /* ⬅ #d3d3d3 */
		"--color-surface-200": "200 200 200", /* ⬅ #c8c8c8 */
		"--color-surface-300": "167 167 167", /* ⬅ #a7a7a7 */
		"--color-surface-400": "102 102 102", /* ⬅ #666666 */
		"--color-surface-500": "36 36 36", /* ⬅ #242424 */
		"--color-surface-600": "32 32 32", /* ⬅ #202020 */
		"--color-surface-700": "27 27 27", /* ⬅ #1b1b1b */
		"--color-surface-800": "22 22 22", /* ⬅ #161616 */
		"--color-surface-900": "18 18 18", /* ⬅ #121212 */
	}
}