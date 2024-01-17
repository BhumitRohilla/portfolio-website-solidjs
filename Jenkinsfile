pipeline {
    agent {
		docker {
			image 'jitesoft/node-yarn'
		}
	}
    stages {
        // stage('Git CheckOut') {
        //     steps {
        //         script {
        //             git branch: 'main',
        //                 credentialsId: 'github-token',
        //                 url: 'https://github.com/BhumitRohilla/portfolio-website-solidjs.git'
        //         }
        //     }
        // }
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
                    sshagent(credentials: ['2176b82b-bf08-42e4-8c02-2f0f2f8735e2'])
                    sh '''
                        tmux a
                        echo working
                    '''
                }
            }
        }

    }
}
