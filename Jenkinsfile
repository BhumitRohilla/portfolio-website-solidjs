pipeline {
    agent {
		dockerfile {
			filename 'Dockerfile'
            args '-v /etc/passwd:/etc/passwd'
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
                    sh "ssh -o StrictHostKeyChecking=no -l ubuntu bhumitrohilla.in tmux --version"
                }
            }
        }
    }
}
