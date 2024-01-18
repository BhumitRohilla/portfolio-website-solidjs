pipeline {
    agent {
		dockerfile {
			filename 'Dockerfile'
            reuseNode true
		}
	}
    stages {

        stage('Build') {
            steps {
                script {
                    sh 'echo is this working'
					sh 'node --version'
					sh 'yarn --version'
					sh 'yarn'
					sh 'yarn build'
                }
            }
        }

        stage('Publish') {
            steps {
                script {
                    sh 'ssh ubuntu@bhumitrohilla.in'
                    sh 'tmux'
                    sh 'echo intumux'
                }
                // sshagent(credentials: ['bhumitrohilla.in-server']) {
                // }
            }
        }


    }
}
