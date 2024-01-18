pipeline {
    agent {
		dockerfile {
			filename 'Dockerfile'
            reuseNode true
            args '-u node:node'
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
                withCredentials([usernamePassword(
                    credentialsId: 'bhumitrohilla.in-userpass',
                    passwordVariable: 'pass',
                    usernameVariable: 'user',
                )]) {
                    sh 'sshpass -p $pass ssh ubuntu@bhumitrohilla.in'
                    sh 'tmux'
                    sh 'echo working'
                }
            }
        }


    }
}
