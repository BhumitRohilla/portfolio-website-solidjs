pipeline {
    agent {
		dockerfile {
			filename 'Dockerfile'
		}
	}
    stages {

        // stage('Build') {
        //     steps {
        //         script {
        //             sh 'echo is this working'
		// 			sh 'node --version'
		// 			sh 'yarn --version'
		// 			sh 'yarn'
		// 			sh 'yarn build'
        //         }
        //     }
        // }


        stage('Publish') {
            steps {
                sshagent(credentials: ['bhumitrohilla.in-server']) {
                    sh "ssh -o StrictHostKeyChecking=no -l ubuntu bhumitrohilla.in uname -a"
                }
            }
        }
    }
}
