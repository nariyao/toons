pipeline {
    agent any

    stages {
        stage('Creating workspace') {
            steps {
                echo 'Creating workspace...'
                sh 'mkdir -p workspace'
                sh 'cd workspace'
                sh 'git clone https://github.com/nariyao/toons.git'
                sh 'cd toons'
                sh 'npm install'
                sh 'npm install -g vite@latest'
            }
        }
        stage('Build react app') {
            steps {
                echo 'Building...'
                sh 'vite build'
            }
        }
        stage('Build docker image') {
            steps {
                echo 'Building docker image...'
                dockerImage = docker.build("nariyao/toons")
            }
        }
        stage('Push docker image') {
            steps {
                echo 'Pushing docker image...'
                dockerImage.push("${env.build_number}")
                dockerImage.push('latest')
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying ${env.build_number} to production..."
                echo "Completes deployment of ${env.build_number} to production..."
            }
        
        }
    }
}