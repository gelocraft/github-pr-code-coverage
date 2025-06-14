export interface ICoverageArtifact {
	coverage_artifact: Array<number>
	toJson(): Promise<
		Array<{
			filename: string
			covered_lines: Array<number>
			uncovered_lines: Array<number>
		}>
	>
}

export interface ICodeCoverage {
	highlight(coverageJson: ICoverageArtifact): Promise<void>
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

export type PytestCoverageJsonFile = {
	files: {
		[filename: string]: {
			executed_lines: Array<number>
			missing_lines: Array<number>
		}
	}
}
