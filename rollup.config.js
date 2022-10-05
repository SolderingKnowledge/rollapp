import css from 'rollup-plugin-css-only'
import typescript from '@rollup/plugin-typescript'

export default {
	input: 'src/main.js',
	output: [
		{
			file: 'build/cjsbundle.js',
			// format: 'cjs',
			// format: 'iife',
			format: 'esm',
			inlineDynamicImports: true,
			sourceMap: true,
		},

		// Optionally add second output folder or file
		// {},
	],
	plugins: [
		css({ output: 'bundle.css' }),
		// typescript({ tsconfig: './tsconfig.json' })
	],
}
