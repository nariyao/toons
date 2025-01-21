pipeline {
    agent any

    tools{
        nodejs '22.13.0'
    }

    stages {
        stage('Build react app') {
            steps {
                echo 'Building...'
                sh 'npm install'
                sh 'npm install -g vite@latest'
                sh 'vite build'
            }
        }
        stage('Build docker image') {
            steps {
                script {
                    echo 'Building docker image...'
                    dockerImage = docker.build("nariyao/toons")
                }
            }
        }
        stage('Push docker image') {
            steps {
                script {
                    echo 'Pushing docker image...'
                    dockerImage.push("${env.BRANCH_NAME}")
                    dockerImage.push('latest')
                }
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying ${env.BRANCH_NAME} to production..."
                echo "Completes deployment of ${env.BRANCH_NAME} to production..."
            }
        }
    }
}
