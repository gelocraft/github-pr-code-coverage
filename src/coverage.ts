import { ICodeCoverage } from './types'

const Coverage: ICodeCoverage = {
	highlight: async function (coverageArtifact) {
		const coverage_json = await coverageArtifact.toJson()
		console.log(coverage_json)
	}
}

export default Coverage
