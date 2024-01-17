pipeline {
    agent {
		docker {
			image 'jitesoft/node-yarn'
		}
	}
    stages {

        stage('list') {
            steps {
                script {
                    sh 'ls -al'
                }
            }
        }

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
                    // Wrap the sshagent step with a block
                    sshagent(credentials: ['bhumitrohilla.in-server']) {
                        // Inside the sshagent block, you need to have some steps
                        sh 'echo working'
                        sh 'tmux'
                        sh 'echo intumux'
                    }
                }
            }
        }


    }
}
