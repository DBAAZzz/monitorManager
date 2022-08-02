pipeline {
    agent any
    
    stages {
        stage('Start') {
            steps {
                echo '分支为 test'
            }
        }
        stage('Pre') {
            steps {
                rm -rf node_modules
            }
        }
        stage('Build') {
            steps {
                yarn
                cnpm run build
                echo "构建成功"
            }
        }
    }
}