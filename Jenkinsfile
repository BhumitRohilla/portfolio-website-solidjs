pipeline {
    agent {
		dockerfile {
			filename 'Dockerfile'
            args '-v /etc/passwd:/etc/passwd'
		}
	}
    stages {
        stage('Build') {
            steps {
                script {
                    sh 'echo is this working'
					sh 'yarn --version'
					sh 'yarn'
                    sh 'rm -r dist || true'
					sh 'yarn build'
                }
            }
        }

        stage('Deply To Testing') {
            when {
                branch 'testing'
            }
            steps {
                withCredentials([
                    sshUserPrivateKey(credentialsId: 'ssh-bhumitrohilla.in', keyFileVariable: 'SSH_KEY'),
                    string(credentialsId: 'ubuntupass', variable: 'ROOT_PASS')]
                ){
                        sh '''
                            ssh -o StrictHostKeyChecking=off -i $SSH_KEY ubuntu@bhumitrohilla.in "rm -r jeff || true"
                            ssh -o StrictHostKeyChecking=off -i $SSH_KEY ubuntu@bhumitrohilla.in "mkdir jeff"
                            scp -o StrictHostKeyChecking=off -i $SSH_KEY -r  ./dist/*  ubuntu@bhumitrohilla.in:/home/ubuntu/jeff/
                            ssh -o StrictHostKeyChecking=off -i $SSH_KEY ubuntu@bhumitrohilla.in "
                                cd /var/www/
                                echo $ROOT_PASS | sudo -S rm -r beta.bhumitrohilla.in || true 
                                echo $ROOT_PASS | sudo -S mkdir beta.bhumitrohilla.in || true
                                echo $ROOT_PASS | sudo -S cp -r ~/jeff/* ./beta.bhumitrohilla.in 
                                echo $ROOT_PASS | sudo -S nginx -s reload
                            "
                        '''
                }
            }
        }
        stage('Deply To Production') {
            when {
                branch 'production'
            }
            steps {
                withCredentials([
                    sshUserPrivateKey(credentialsId: 'ssh-bhumitrohilla.in', keyFileVariable: 'SSH_KEY'),
                    string(credentialsId: 'ubuntupass', variable: 'ROOT_PASS')]
                ){
                        sh '''
                            ssh -o StrictHostKeyChecking=off -i $SSH_KEY ubuntu@bhumitrohilla.in "rm -r jeff || true"
                            ssh -o StrictHostKeyChecking=off -i $SSH_KEY ubuntu@bhumitrohilla.in "mkdir jeff"
                            scp -o StrictHostKeyChecking=off -i $SSH_KEY -r  ./dist/*  ubuntu@bhumitrohilla.in:/home/ubuntu/jeff/
                            ssh -o StrictHostKeyChecking=off -i $SSH_KEY ubuntu@bhumitrohilla.in "
                                cd /var/www/
                                echo $ROOT_PASS | sudo -S rm -r bhumitrohilla.in || true 
                                echo $ROOT_PASS | sudo -S mkdir bhumitrohilla.in || true
                                echo $ROOT_PASS | sudo -S cp -r ~/jeff/* ./bhumitrohilla.in 
                                echo $ROOT_PASS | sudo -S nginx -s reload
                            "
                        '''
                }
            }
        }
    }
    post {
        success {
            echo 'Build Completed Successfully'
            mail bcc:'', body: "<b>Portfolio Website</b>\n<br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER}<br> ", charset: 'UTF-8', from: 'bhumit73rohilla@gmail.com', mimeType: 'text/html', subject: "Success Build FOR ${env.JOB_NAME}", to: "bhumit73rohilla@gmail.com";
        }
        failure {
            echo 'Build Completed With Error'
            mail bcc:'', body: "<b>Portfolio Website Build Failed</b>\n<br>Project: ${env.JOB_NAME} <br>Build Number: ${env.BUILD_NUMBER}<br> ", charset: 'UTF-8', from: 'bhumit73rohilla@gmail.com', mimeType: 'text/html', subject: "Fail Build FOR ${env.JOB_NAME}", to: "bhumit73rohilla@gmail.com";
        }
    }
}
