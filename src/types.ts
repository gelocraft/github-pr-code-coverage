export interface ICoverageJson {
	coverage_artifact: Array<number>
	parse(): Promise<
		Array<{
			filename: string
			covered_lines: Array<number>
			uncovered_lines: Array<number>
		}>
	>
}

export type JestCoverageJsonFile = {
	[filename: string]: {
		s: { [statement: number]: number }
		statementMap: {
			[statement: number]: {
				start: { line: number }
				end: { line: number }
			}
		}
	}
}
