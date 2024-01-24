pipeline {
    agent {
		dockerfile {
			filename 'Dockerfile'
            reuseNode true
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
                    sh '''
                        [ -d ~/.ssh ] || mkdir ~/.ssh && chmod 0700 ~/.ssh
                        ssh-keyscan -t rsa,dsa bhumitrohilla.com >> ~/.ssh/known_hosts
                        ssh ubuntu@bhumitrohilla.in
                    '''
                }
            }
        }
    }
}
