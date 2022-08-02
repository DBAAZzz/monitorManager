pipeline {
    agent any
    
    stages {
        stage('Start') {
            steps {
                echo '分支为 test'
            }
        }
        stage('安装依赖') {
            steps {
                sh "yarn"
                echo "安装依赖成功"
            }
        }
        stage('打包文件') {
            steps {
                sh "cnpm run build"
                echo "打包文件成功"
            }
        }
        stage('移动文件') {
            steps {
                script {
                    out=sh(script: " -d '/nginx_project/monitorManager' ", returnStdout: true)
                    echo "out变量为${out}"
                    sh "mv monitorManager /nginx_project"
                    echo "移动成功"
                }
                
            }
        }
    }
}