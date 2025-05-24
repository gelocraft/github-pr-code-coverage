import { ICoverageArtifact } from '../types'

export class PytestCoverageArtifact implements ICoverageArtifact {
	coverage_artifact: Array<number>

	constructor(coverage_artifact: Array<number>) {
		this.coverage_artifact = coverage_artifact
	}
	async toJson() {
		return [
			{
				filename: '',
				covered_lines: [],
				uncovered_lines: []
			}
		]
	}
}
