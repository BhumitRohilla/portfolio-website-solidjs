pipeline {
    agent {
		dockerfile {
			filename 'Dockerfile'
            reuseNode true
            additionalBuildArgs "--build-arg jenkinsUserId=\$(id -u jenkins)"
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
                    sh 'echo working'
                    sh 'tmux'
                    sh 'echo intumux'
                }
            }
        }


    }
}
