pipeline {
    agent any
    
    stages {
        stage('Start') {
            steps {
                echo '分支为 ${branch}'
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
                sh "rm -rf /nginx_project/monitorManager"
                sh "mv monitorManager /nginx_project"
                echo "移动成功"
            }
        }
    }
}