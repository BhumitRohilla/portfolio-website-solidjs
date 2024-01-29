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
					sh 'node --version'
					sh 'yarn --version'
					sh 'yarn'
					sh 'yarn build'
                }
            }
        }

        stage('Publish') {
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
                                echo #ROOT_PASS | sudo -S rm -r bhumitrohilla.in || true 
                                echo $ROOT_PASS | sudo -S mkdir bhumitrohilla.in || true
                                echo $ROOT_PASS | sudo -S cp -r ~/jeff/* ./bhumitrohilla.in 
                                echo $ROOT_PASS | sudo -S nginx -s reload
                            "
                        '''
                }
            }
        }
    }
}
