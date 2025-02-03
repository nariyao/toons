pipeline {
    agent any

<<<<<<< HEAD
    tools{
        nodejs '22.13.0'
    }
    environment {
        s3Bucket = "jenkins-artifacts-college"
        registryUri = "651428245008.dkr.ecr.us-east-1.amazonaws.com"
        registryNamespace = "college"
        imageName = "toons"         
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
        stage('Create zip file') {
            steps {
                echo 'Creating zip file...'
                sh 'zip -r toons.zip dist'
            }
        }   
        stage("Uploading zip to S3"){
            steps{
                echo 'Uploading zip to S3...'
                sh "aws s3 cp toons.zip s3://${s3Bucket}/toons.zip"
                echo 'Uploaded zip to S3...'
            }
        }
        stage('Build docker image') {
            steps {
                script {
                    echo 'Building docker image...'
                    dockerImage = docker.build("${registryUri}/${registryNamespace}/${imageName}:${env.BUILD_NUMBER}")
                }
            }
        }
        stage('docker login') {
            steps {
                script {
                    sh """
                    aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin ${registryUri}
                    """
                }
=======
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
>>>>>>> k8s
            }
        }
        stage('Push docker image') {
            steps {
<<<<<<< HEAD
                script {
                    echo 'Pushing docker image...' 
                    dockerImage.push()
                    dockerImage.push("latest")
                }
=======
                echo 'Pushing docker image...'
                dockerImage.push("${env.build_number}")
                dockerImage.push('latest')
>>>>>>> k8s
            }
        }
        stage('Deploy') {
            steps {
<<<<<<< HEAD
                echo "Deploying ${env.BRANCH_NAME}-${env.BUILD_NUMBER} to production..."
                echo "Completes deployment of ${env.env.BUILD_NUMBER} to production..."
            }
        }
    }
}
=======
                echo "Deploying ${env.build_number} to production..."
                echo "Completes deployment of ${env.build_number} to production..."
            }
        
        }
    }
}
>>>>>>> k8s
